export const getTableHeader = (headers: string[]): string => {
  let headerNames = '| ';
  let separator = '|';
  headers.forEach((header: string, index: number) => {
    headerNames += `${header} |`;
    separator += '----------|';
    if (index === headers.length - 1) {
      headerNames += '\n';
      separator += '\n';
    }
  });

  headerNames += separator;

  return headerNames;
};

export const getTableBody = (params: string[]): string => {
  let body = '| ';
  params.forEach((param, index) => {
    body += ` ${param} | `;
    if (index === body.length - 1) {
      body += '\n';
    }
  });

  return body;
};

export const getLineSeparator = (length: number): string => {
  let separator = '|';
  for (let i = 0; i < length; ++i) {
    separator += '--------|';
    if (i === length - 1) {
      separator += '\n';
    }
  }
  return separator;
};
