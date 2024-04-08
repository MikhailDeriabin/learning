import {ChangeEvent, useState} from 'react';
import './App.css';

type Repo = {
    id: number,
    full_name: string,
    url: string
}

function Table() {
    const [repos, setRepos] = useState<Repo[] | null>(null);
    const [search, setSearch] = useState<string>('');

    function setSearchHandler(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    async function handleClick() {
        const resp = await fetchRepos(search);
        setRepos(resp);
    }

    async function fetchRepos(searchQuery: string): Promise<Repo[] | null> {
        try {
            const resp = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}&per_page=10`, {method: 'GET'});
            if(!resp.ok)
                return null;

            const body = await resp.json();
            if(!body || !body.items || body.items.length === 0)
                return null;

            return body.items[0] as Repo[];
        } catch (e) {
            console.log('Error on request', e);
        }
    }

    return (
        <div>
            <input name='search' value={search} placeholder='search for repo' type='text' onChange={setSearchHandler} required/>
            <button onClick={handleClick}>Search</button> <br/>
            {
                (repos && repos.length > 0) ?
                    <table>
                        <tbody>
                        {
                            repos.map((repo) =>
                                <tr key={repo.id}>
                                    <td>{repo.full_name}</td>
                                    <td>{repo.url}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    :
                    'Nothing found'
            }
        </div>
    );
}

export default Table;