import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { QueryList } from "./query/QueryList";
import { QueryCreate } from "./query/QueryCreate";
import { QueryEdit } from "./query/QueryEdit";
import { QueryShow } from "./query/QueryShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Yggdrasil"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
        <Resource
          name="Query"
          list={QueryList}
          edit={QueryEdit}
          create={QueryCreate}
          show={QueryShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
