import { DropDown } from './DropDown';

export function UserMenu() {
  return (
    <DropDown.Menu>
      <DropDown.Trigger className="h-12 w-12 rounded-full bg-teal-0 text-sm font-medium tracking-[-0.5px] text-teal-900">
        BP
      </DropDown.Trigger>

      <DropDown.Content anchor="bottom end">
        <DropDown.Item onClick={() => {}}>Sair</DropDown.Item>
      </DropDown.Content>
    </DropDown.Menu>
  );
}
