import { NextApiRequest, NextApiResponse } from 'next';


interface ReturnData {
  name: string
}
export default async function handler(_: NextApiRequest,
  res: NextApiResponse<string[]>) {

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${process.env.GITHUB_AUTH_TOKEN}`);
  headers.append("Accept", "application/vnd.github+json");
  headers.append("X-GitHub-Api-Version", "2022-11-28");


  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_PROFILE}/obsidian/contents/blogs`, {
    method: "GET",
    headers: headers,
  });
  const data = await response.json();
  const fileNames: string[] = data ? data.map((val: ReturnData) => {
    return val.name
  }) : []

  const markdownFileNames = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));

  res.status(200).json(markdownFileNames);
}


export const getMarkdownFileNames = () => {
};
