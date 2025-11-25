import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface SortOrder { value: string, label: string }

interface Props{
  onSelectSort: (sortValue:string)=>void,
  sortOrder:string
}

const SortSelector = ({onSelectSort,sortOrder}:Props) => {
  const data: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSort = data.find(order => order.value === sortOrder);

  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      {/*{selectedPlatform?.name || 'Platforms'}*/}
      Order By : {selectedSort?.label || 'Relevance'}
    </MenuButton>
    <MenuList>
      {data.map(order =>
          <MenuItem onClick={() => onSelectSort(order.value)} key={order.value}>{order.label}</MenuItem>
      )}
    </MenuList>
  </Menu>
}
export default SortSelector;