export const sortByDate = (oldDate, newDate) => {
  return (
    new Date(newDate.frontMatter.date) - new Date(oldDate.frontMatter.date)
  );
};
