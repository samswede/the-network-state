import './ChapterSubtitle.css';

function ChapterSubtitle( { chapterSubtitle }) {
  return (
    <>
        <div className="chapterSubheading">
            <div className="chapterSubheading__line"></div>
            <h4 className="chapterSubheading__text">{chapterSubtitle}</h4>
            <div className="chapterSubheading__line"></div>
        </div>
    </>

    );
}

export default ChapterSubtitle;

