import { CodeBlock, dracula } from 'react-code-blocks';
import './markdown.scss'
export default function WhichDev() {
    const  code=`this.developer.title = this.UI.looksGood ? "full stack" : "back end developer";
                // made by Naor Tedgi`
    const  language="javascript"
    const  showLineNumbers=true
    
  return (
    <div className='readme-container'>
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
    </div>
  );
}