import { useState } from "react";
import { VscChevronDown, VscPackage } from "react-icons/vsc";
export default function NoteGroup(props) {
  const { children, title, icon } = props;
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`note-group${collapsed ? " collapsed" : ""}`}>
      <div className="note-group__title">
        <div className="note-group__title-icon">{icon}</div>
        {title}
        <div className="note-group__title-expand" onClick={() => setCollapsed(!collapsed)}>
          <VscChevronDown/>
        </div>
      </div>
      {children}
    </div>
  );
}

NoteGroup.defaultProps = {
  title: "Группа заметок",
  icon: <VscPackage/>
};
