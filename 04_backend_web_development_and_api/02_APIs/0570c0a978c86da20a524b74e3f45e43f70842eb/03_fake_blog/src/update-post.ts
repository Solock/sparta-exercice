import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: number, title: string) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
  {
    method: "PATCH",
    body:  JSON.stringify({id: "1", title: "New title"}),
     headers: { "Content-Type": "application/json" },
  },
    (error, body) => {
    if(error) {
      console.error(error);
    }
    else {
      const data = JSON.parse(body);
      console.log(data);
    }
  })
}

function updatePostAuthor(id: number, author: string) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
  {
    method: "PATCH",
    body:  JSON.stringify({id: "1", author: "New author"}),
     headers: { "Content-Type": "application/json" },
  },
    (error, body) => {
    if(error) {
      console.error(error);
    }
    else {
      const data = JSON.parse(body);
      console.log(data);
    }
  })
}

function updatePost(id: number) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
  {
    method: "PUT",
    body:  JSON.stringify({id: "1", title: "New title", author: "New author"}),
    headers: { "Content-Type": "application/json" },
  },
    (error, body) => {
    if(error) {
      console.error(error);
    }
    else {
      const data = JSON.parse(body);
      console.log(data);
    }
  })
}

export { updatePost, updatePostAuthor, updatePostTitle };
