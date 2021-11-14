import NoteGroup from "$lib/elements/NoteGroup";
import NoteLink from "$lib/elements/NoteLink";
import {
  VscFilterFilled,
  VscSearch,
  VscStarEmpty,
  VscTrash,
  VscDiffAdded,
  VscPinned,
} from "react-icons/vsc";

export default function NotesPage() {
  return (
    <div className="page">
      <aside className="sidebar">
        <div className="sidebar-head">
          <div className="notes-search">
            <div className="notes-search__icon">
              <VscSearch size=".8rem" />
            </div>
            <input type="text" placeholder="Поиск" />
          </div>
          <div className="notes-create icon">
            <VscDiffAdded />
          </div>
          <div className="notes-filter icon">
            <VscFilterFilled />
          </div>
        </div>
        <div className="sidebar-body">
          <div className="notes-list">
            <NoteGroup icon={<VscPinned />} title="Закрепленные">
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
            </NoteGroup>
            <NoteGroup title="Рецепты">
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
              <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
            </NoteGroup>
            <NoteLink
                title="Заметочка"
                date="14.11.2021"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia..Lorem ipsum dolor sit amet"
              />
          </div>
        </div>
      </aside>
      <div className="content">
        <div className="content-head">
          <div className="content-title">Заметка #1</div>
          <div className="content-options">
            <div className="icon content-option">
              <VscStarEmpty size="1.2rem" />
            </div>
            <div className="icon content-option">
              <VscTrash size="1.2rem" />
            </div>
          </div>
        </div>
        <div className="content-body" contentEditable="true"></div>
      </div>
    </div>
  );
}
