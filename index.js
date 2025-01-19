require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "SAMARTHSHANBHAG",
  id: 109241178,
  node_id: "U_kgDOBoLjWg",
  avatar_url: "https://avatars.githubusercontent.com/u/109241178?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/SAMARTHSHANBHAG",
  html_url: "https://github.com/SAMARTHSHANBHAG",
  followers_url: "https://api.github.com/users/SAMARTHSHANBHAG/followers",
  following_url:
    "https://api.github.com/users/SAMARTHSHANBHAG/following{/other_user}",
  gists_url: "https://api.github.com/users/SAMARTHSHANBHAG/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/SAMARTHSHANBHAG/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/SAMARTHSHANBHAG/subscriptions",
  organizations_url: "https://api.github.com/users/SAMARTHSHANBHAG/orgs",
  repos_url: "https://api.github.com/users/SAMARTHSHANBHAG/repos",
  events_url: "https://api.github.com/users/SAMARTHSHANBHAG/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/SAMARTHSHANBHAG/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Samarth Shanbhag",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 3,
  following: 8,
  created_at: "2022-07-13T18:15:57Z",
  updated_at: "2025-01-08T16:06:44Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("samarthshanbhag");
});
app.get("/login", (req, res) => {
  res.send("<h1>Samarth is learning backend</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>I am learning backend from youtube</h2>");
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
