import { Component, createResource, For, Show } from 'solid-js';
import getRepos from '../utils/getRepos';

const GhRepo: Component = () => {
  const [repos] = createResource(getRepos);

  return (
    <ul class="flex flex-col gap-2 p-2 max-w-prose">
      <For each={repos()}>
        {(repo) => (
          <li class="border-red-200 dark:border-red-800 border-2 border-dashed p-4">
            <a href={repo.html_url} target="_blank" class="flex flex-col gap-4">
              <h6 class="underline text-red-800 dark:text-red-200">{repo.name}</h6>
              <Show when={repo.description}>
                <p>{repo.description}</p>
              </Show>
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};

export default GhRepo;
