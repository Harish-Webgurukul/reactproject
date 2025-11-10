import axios from "axios";
// instance of youtube
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "access_key",
    part: "snippet",
    maxResults: 5,
  },
});

export default youtube;
