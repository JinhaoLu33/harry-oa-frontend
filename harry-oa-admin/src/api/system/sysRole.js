import request from "@/utils/request";

const api_name = "/admin/system/sysRole";

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: "get",
      //params: visible in paths
      params: searchObj,
    });
  },

  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: "delete",
    });
  },

  saveRole(role) {
    return request({
      url: `${api_name}/save`,
      method: "post",
      //data: in body, json format
      data: role,
    });
  },

  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: "get",
    });
  },

  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: "put",
      data: role,
    });
  },

  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: `delete`,
      data: idList,
    });
  },
};
