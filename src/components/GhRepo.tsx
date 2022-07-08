import { IoStar } from 'solid-icons/io';
import { Component, createResource, For, Show } from 'solid-js';
import getRepos from '../utils/getRepos';

const GhRepo: Component = () => {
  const [repos] = createResource(getRepos);
  return (
    <Show when={repos()?.length !== 0}>
      <ul class="flex flex-col gap-2 p-2 max-w-prose">
        <For each={repos()}>
          {(repo) => (
            <li class="rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow transition-all duration-200 backdrop-filter backdrop-blur-md">
              <a href={repo.html_url} target="_blank" class="flex flex-col gap-4 p-4">
                <h6 class="underline text-red-800 dark:text-red-200">{repo.name}</h6>
                <Show when={repo.description}>
                  <p>{repo.description}</p>
                </Show>
                <div class="flex gap-2 items-center">
                  <IoStar size={16} color="#e3b341" />
                  <p>{repo.stargazers_count}</p>
                </div>
              </a>
            </li>
          )}
        </For>
      </ul>
    </Show>
  );
};

export default GhRepo;
