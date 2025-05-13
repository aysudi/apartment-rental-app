import axios from "axios";
import { API_URL } from "../endpoints/constants";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
