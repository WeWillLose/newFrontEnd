export default {
  getFilenameFromHeaders(headers): string {
    let filename = "";
    let disposition = headers['Content-Disposition'] || headers['content-disposition'];
    if (disposition && disposition.indexOf('attachment') !== -1) {
      let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      let matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }
    }
    console.log(filename)
    return filename;
  }
}
