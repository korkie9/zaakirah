export interface DateAndHeading {
  date: string,
  heading: string
}
export function parseMdString(input: string): DateAndHeading {
  const [datePart] = input.split(' ');
  if (!parseInt(datePart)) return {
    date: "", heading: input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('.md', '')
  };

  const day = datePart.slice(0, 2);
  const month = datePart.slice(2, 4);
  const year = datePart.slice(4);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  const headingArr = input
    .split(' ')
  headingArr.shift();

  const heading = headingArr?.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('.md', '');

  return {
    date: `${monthName} ${day} ${year}`,
    heading: heading
  };
}
