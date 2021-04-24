import api from "src/api/restApi";
import CommonUtils from "src/utils/common/CommonUtils";
import fileDownload from 'js-file-download'

export default {
  async downloadReportById(id: number) {
    if (!!id) {
      const response = await api.downloadReport(id);
      let name = CommonUtils.getFilenameFromHeaders(response.headers)
      if (!name) {
        name = "report_" + this.$uuid.v4() + ".docx"
      }
      fileDownload(response.data, name);
    }
  },
  async downloadScoreListById(id: number) {
    if (!!id) {
      const response = await api.downloadScoreList(id);
      let name = CommonUtils.getFilenameFromHeaders(response.headers)
      if (!name) {
        name = "score_list_" + this.$uuid.v4() + ".docx"
      }
      fileDownload(response.data, name);
    }

  }

}
