import Api from './Api';
class Company extends Api {
  constructor() {
    super();
  }
  async getCompanyData(ctx) {
    const { data } = await this.api.get(`/companies/by-user`, this.getAuthOptions(ctx));
    return data;
  }

  postCompany(data) {
    return this.api.post('/companies', data, this.getAuthOptions());
  }

  async uploadLogo(file) {
    const formData = new FormData();
    formData.append('file', file);
    const { headers } = this.getAuthOptions();
    const config = {
      ...headers,
      'content-type': 'multipart/form-data',
    };
    const { data } = await this.api.post('/companies/upload-logo', formData, config);
    return data.file_path;
  }
}

export default Company;