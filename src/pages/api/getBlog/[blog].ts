import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type ResponseData = {
  mdxSource: MDXRemoteSerializeResult
}
export default async function getBlogs(req: NextApiRequest,
  res: NextApiResponse<ResponseData>) {
  const filePath = path.join(process.cwd(), 'src/blogs/', `${req.query.blog}.md`);

  const fileContents = fs.readFileSync(filePath, 'utf8');

  const mdxSource = await serialize(fileContents);

  res.status(200).json({ mdxSource });
}
