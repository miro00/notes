export default function NoteLink(props) {
  const { title, date, desc, color } = props;

  return (
    <div className="note-link">
      {color && (
        <div
          className="note-link__color"
          style={{
            backgroundColor: color,
          }}
        ></div>
      )}
      <div className="note-link__head">
        <div className="note-link__title">{title}</div>
        <div className="note-link__date">{date}</div>
      </div>
      <div className="note-link__body">
        <div className="note-link__description">{desc}</div>
      </div>
    </div>
  );
}

NoteLink.defaultProps = {
  title: "Заметка",
};
