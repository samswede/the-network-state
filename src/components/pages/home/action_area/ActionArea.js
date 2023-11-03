import './ActionArea.css';

import LinkButton from '../../../base/link_button/LinkButton';
import TextFormSubmit from '../../../base/text_form_submit/TextFormSubmit';


function ActionArea({}) {
  return (
        <div className='actionArea'>
            <LinkButton
                iconID="podcast"
                text="Podcast"
                linkURL={'https://www.amazon.com/'}
            />
            <LinkButton
                iconID="buy"
                text="Buy"
                linkURL={'https://www.amazon.com/'}
            />
            <LinkButton
                iconID="read"
                text="Read"
                linkURL={'https://www.amazon.com/'}
            />
            <LinkButton
                iconID="download"
                text="PDF"
                linkURL={'https://www.amazon.com/'}
            />
            <TextFormSubmit
                id="subscribe"
                TextFormSubmit="Subscribe"
                inputType="email"
                placeHolder="Email Address"
            />

        </div>
  );
}

export default ActionArea;

