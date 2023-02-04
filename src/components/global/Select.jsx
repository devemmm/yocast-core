import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { categories } from "../../data/pageData";
import { setCategory } from "../../features/podcastSlice";
import { useDispatch, useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function SelectCategory() {
  const dispatch = useDispatch();
  const [categ, setCateg] = React.useState([]);

  const category = useSelector((store) => store.podcast.category);
  const selectedPodcast = useSelector((store) => store.podcast.selectedPodcast);
  const value = [selectedPodcast.category];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCateg(typeof value === "string" ? value.split(",") : value);
    dispatch(setCategory(categ.toString()));
    console.log(category);
  };
  return (
    <div className="w-[100%]">
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
        <Select
          className=" bg-[#1F2A40] focus:border-0"
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          defaultValue={value}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              <Checkbox checked={categ.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
