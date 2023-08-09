import React from "react";
import { Menu2Outline } from "@envio-ui/icons";
import { Dropdown, Button } from "../../../components";

export const DropdownExample = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button icon={Menu2Outline} iconSize={20} size="sm" variant="primary" />
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content>
          <Dropdown.Item>asdf</Dropdown.Item>
          <Dropdown.Item>asdf</Dropdown.Item>
          <Dropdown.Item disabled>asdf</Dropdown.Item>
          <Dropdown.Item>asdf</Dropdown.Item>

          <Dropdown.Separator />

          <Dropdown.Sub>
            <Dropdown.SubTrigger>More Tools</Dropdown.SubTrigger>
            <Dropdown.Portal>
              <Dropdown.SubContent sideOffset={2} alignOffset={-5}>
                <Dropdown.Item>asdf</Dropdown.Item>
                <Dropdown.Item disabled>asdf</Dropdown.Item>
                <Dropdown.Item>asdf</Dropdown.Item>
              </Dropdown.SubContent>
            </Dropdown.Portal>
          </Dropdown.Sub>

          <Dropdown.Separator />

          <Dropdown.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks
          </Dropdown.CheckboxItem>

          <Dropdown.CheckboxItem
            className="DropdownCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </Dropdown.CheckboxItem>

          <Dropdown.Separator />

          <Dropdown.Label>People</Dropdown.Label>
          <Dropdown.RadioGroup value={person} onValueChange={setPerson}>
            <Dropdown.RadioItem value="pedro">Pedro Duarte</Dropdown.RadioItem>
            <Dropdown.RadioItem value="colm">Colm Tuite</Dropdown.RadioItem>
          </Dropdown.RadioGroup>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown>
  );
};
