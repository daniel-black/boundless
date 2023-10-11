import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import style from "react-syntax-highlighter/dist/esm/styles/prism/lucario";
import { CopyCodeButton } from "./CopyCodeButton";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          const regexedText = String(children).replace(/\n$/, "");

          return (
            <div className="relative">
              <div className="absolute z-10 w-full flex justify-end pr-2 pt-2">
                <CopyCodeButton code={regexedText} />
              </div>
              {match ? (
                // @ts-ignore
                <SyntaxHighlighter
                  {...rest}
                  style={style}
                  language={match[1]}
                  PreTag="div"
                >
                  {regexedText}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )}
            </div>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
