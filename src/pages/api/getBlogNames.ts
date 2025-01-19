import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(_: NextApiRequest,
  res: NextApiResponse<string[]>) {

  const blogDirectory = path.join(process.cwd(), 'src', 'blogs');
  const fileNames = fs.readdirSync(blogDirectory);

  const markdownFileNames = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));

  res.status(200).json(markdownFileNames);
}


export const getMarkdownFileNames = () => {
};
