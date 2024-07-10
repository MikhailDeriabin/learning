import axios from "axios";
import { BookInfo } from "./components/book-info";
import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { DataSource } from "./components/DataSource";
import { ResourceLoader } from "./components/ResourceLoader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/UserLoader";
import { ENV } from "./ENV";


function App() {

  return (
    <>
      <div>
        <h2>CurrentUserLoader</h2>
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
      </div>
      <p>#################################################</p>
        
      <div>
        <h2>UserLoader</h2>
        <UserLoader userId="2">
          <UserInfo />
        </UserLoader>
      </div>
      <p>#################################################</p>

      <div>
        <h2>ResourceLoader</h2>
        <ResourceLoader endpoint="/users/3" resourceName="user">
          <UserInfo />
        </ResourceLoader>
        <p>-----------------------------------------------</p>
        <ResourceLoader endpoint="/books/3" resourceName="book">
          <BookInfo />
        </ResourceLoader>
      </div>
      <p>#################################################</p>

      <div>
        <h2>DataSource</h2>
        <DataSource getData={() => getDataFromAPI(`${ENV.HOST}/users/1`)} resourceName="user">
          <UserInfo />
        </DataSource>
      </div>
      <p>#################################################</p>
    </>
  )
}

//With this DataSource container, we are separating the logic of fetching the data from the container
async function getDataFromAPI(url: string) {
  const resp = await axios.get(url);
  return resp.status >= 300 ? null : resp.data;
}

//Get data from another source, so that the DataSource can be used with any function, when the logic is separated
function getDataFromLocalStorage(key: string) {
  return localStorage.getItem(key);
}

export default App;
