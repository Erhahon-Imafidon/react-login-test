import "@testing-library/jest-dom";
import axios from "axios";

const mockedAxios = jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

export default mockedAxios;
