import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type ResponseData = {
  mdxSource: MDXRemoteSerializeResult
}

interface ReturnData {
  content: string
}

export default async function getBlogs(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${process.env.GITHUB_AUTH_TOKEN}`);
  headers.append("Accept", "application/vnd.github+json");
  headers.append("X-GitHub-Api-Version", "2022-11-28");

  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_PROFILE}/${process.env.OBSIDIAN_REPO}/contents/blogs/${req.query.blog}.md`, {
    method: "GET",
    headers: headers,
  });

  const data: ReturnData = await response.json();
  const fileContents: string = Buffer.from(data.content, 'base64').toString('utf-8');

  const mdxSource = await serialize(fileContents);

  res.status(200).json({ mdxSource });
}
