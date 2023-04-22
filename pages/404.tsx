import React, { Component } from "react";

import { Layout } from "components/Layout/Layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="flex min-h-[85vh] w-full items-center justify-center">
          <span>404 - Whoops, Page was not Found. 😞😞😞</span>
        </div>
      </Layout>
    );
  }
}
