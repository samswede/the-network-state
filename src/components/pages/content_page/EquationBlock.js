import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './EquationBlock.css';

function EquationBlock( { equationName, katexExpression } ) {
  return (
    <div className="equationBlock">
      <p className="equationBlock__name">{equationName}</p>
      <BlockMath math={katexExpression} />
    </div>
  );
};

export default EquationBlock;
