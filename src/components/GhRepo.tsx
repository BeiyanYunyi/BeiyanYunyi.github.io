import { Component, createResource, For } from 'solid-js';
import getRepos from '../utils/getRepos';

const GhRepo: Component = () => {
  const [repos] = createResource(getRepos);

  return (
    <div class="max-h-[20rem] overflow-y-auto flex flex-col gap-2">
      <For each={repos()}>
        {(repo) => (
          <div>
            <a href={repo.html_url} target="_blank" class="underline">
              {repo.name}
            </a>
          </div>
        )}
      </For>
    </div>
  );
};

export default GhRepo;
