import { useState } from "react";

const CargoItem = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleCargoForm = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggleCargoForm}>+ {open ? "Close" : "Open"} Cargo Form</button>
      {open ? (
        <div>
          Cargo Item
          <hr />
          Unloading stop:
          <select>
            <option>Test</option>
          </select>
          <br />
          Type:
          <select>
            <option>Test</option>
          </select>
          <br />
          PO number:
          <input type="number" />
          <br />
          Quantity:
          <input type="number" />
          <br />
          Total weight:
          <input type="number" />
          <br />
          Length:
          <input type="number" />
          <br />
          Width:
          <input type="number" />
          <br />
          Height:
          <input type="number" />
          <hr />
          <button>Save</button>
          <button>Cancel</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { CargoItem };
