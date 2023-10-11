import OpenAI from "openai";
import Markdown from "react-markdown";
import { RecommendedLinks } from "./RecommendedLinks";
import { H1 } from "@/components/ui/typography/H1";
import { H2 } from "@/components/ui/typography/H2";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/lucario";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

type DynamicPageProps = {
  params: { segments?: string[] };
};

export async function generateMetadata({ params }: DynamicPageProps) {
  return {
    title: params?.segments
      ? params.segments[0].replaceAll("-", " ")
      : "Boundless",
  };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  if (!params?.segments) {
    return (
      <div>
        you need to put something after the &quot;/explore&quot; in the url
      </div>
    );
  }

  let pageData = undefined;

  // need to render something if this call fails
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    messages: [
      {
        role: "user",
        content: formatPrompt("/" + params.segments[0]),
      },
    ],
  });

  const responseContent = res.choices[0].message.content;
  if (!responseContent) {
    return <div>No content was found!</div>;
  }

  // need to render something if parsing fails
  try {
    pageData = JSON.parse(responseContent);
    console.log(pageData);
  } catch (e) {
    console.error(e);
    return (
      <div>
        <p>failed to parse</p>
        <p>bad json</p>
        <pre>{JSON.stringify(responseContent)}</pre>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <div className="flex-1 border-x py-3 px-10">
        {pageData ? (
          <div className="space-y-3">
            <H1>{pageData?.title}</H1>
            <H2>{pageData?.subTitle}</H2>
            <Markdown
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children).replace(/\n$/, "")}
                      style={style}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {pageData?.content}
            </Markdown>
          </div>
        ) : null}
      </div>
      {pageData?.nextLinks ? (
        <RecommendedLinks links={pageData.nextLinks} />
      ) : null}
    </div>
  );
}

function formatPrompt(pathName: string) {
  return `Please help me build a webpage with the path, ${pathName}.

  Always reply with the following JSON formatting:

  {
    "title": "<A concise string that describes the page>",
    "subTitle": "<A slightly longer string that adds useful context>",
    "content": "<The main content of the webpage (can be in markdown format)>"
    "nextLinks": "<A JavaScript array of objects that represent links that would logically make sense to explore after reading the ${pathName} page. Each object in the array has a \`href\` property and a \`text\` property.>"
  }
  
  Below is an example of a good response:
  
  {
    "title": "The Go Programming Language",
    "subTitle": "Go: Streamlined Simplicity for Modern Development",
    "content": "Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of...",
    "nextLinks": [
      {"href":"/variables-in-go","text":"Variables in Go"},
      {"href":"/loops-in-go","text":"Loops in Go"},
      {"href":"/go-concurrency-model","text":"Concurrency in Go"},
      {"href":"/file-io-in-go","text":"File IO in Go"},
      {"href":"/go-web-server","text":"Go Web Server"},
      {"href":"/things-built-with-go","text":"Things Built With Go"}
    ]
  }
  `;
}
