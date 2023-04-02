import { Link } from "react-router-dom";
import {
  BackLink,
  Button,
  RefreshBlock,
  Select,
} from "../../components/styled-components";

import Back from "./../../assets/icons/back-arrow.svg";
import Refresh from "./../../assets/icons/refresh.svg";

export default function AddSequence() {
  return (
    <div
      style={{
        padding: "1em 1em 0 1em",
      }}
    >
      <Link to="/">
        <BackLink>
          <img src={Back} alt="back" width={15} height={15} />
          <span>Back </span>
        </BackLink>
      </Link>
      <h2
        style={{
          fontWeight: 500,
          fontSize: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        AddSequence
      </h2>
      <form>
        <Select>
          <option value="" hidden>
            Choose a sequence
          </option>
          <option value="1">Sequence 1</option>
        </Select>
        <Select>
          <option value="" hidden>
            Recipient
          </option>
          <option value="1">Sequence 1</option>
        </Select>
        <RefreshBlock>
          <img src={Refresh} alt="refresh" width={15} height={15} />
          <span>Refresh Sequesnces</span>
        </RefreshBlock>
        <Button>Add Now</Button>
      </form>
    </div>
  );
}
