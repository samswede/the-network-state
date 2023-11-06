import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './PseudoCodeBlock.css';

function PseudoCodeBlock( { katex } ) {
  return (
    <div className="pseudoCodeBlock">
      <BlockMath math={katex} />
    </div>
  );
};

export default PseudoCodeBlock;
