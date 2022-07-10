import { IoLogoGithub, IoStar } from 'solid-icons/io';
import { RiSystemArrowDropDownLine, RiSystemArrowDropUpLine } from 'solid-icons/ri';
import { Component, createResource, createSignal, For, Show } from 'solid-js';
import getRepos from '../utils/getRepos';

const GhRepo: Component = () => {
  const [repos] = createResource(getRepos);
  const [show, setShow] = createSignal(false);
  return (
    <Show
      when={repos()?.length !== 0 && show()}
      fallback={
        <button
          onClick={(e) => {
            e.preventDefault();
            setShow(true);
          }}
          class="rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow transition-all duration-200 hover:backdrop-blur-sm backdrop-filter backdrop-blur-md max-w-prose p-2 flex gap-2"
        >
          <IoLogoGithub size={24} />
          <p>显示 Repo</p>
          <RiSystemArrowDropDownLine size={24} />
        </button>
      }
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setShow(false);
        }}
        class="rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow transition-all duration-200 hover:backdrop-blur-sm backdrop-filter backdrop-blur-md max-w-prose p-2 flex gap-2"
      >
        <IoLogoGithub size={24} />
        <p>收起 Repo</p>
        <RiSystemArrowDropUpLine size={24} />
      </button>
      <ul class="flex flex-col gap-2 p-2 max-w-prose">
        <For each={repos()}>
          {(repo) => (
            <li class="rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow transition-all hover:backdrop-blur-sm duration-200 backdrop-filter backdrop-blur-md flex flex-col items-start gap-4 p-4">
              <a href={repo.html_url} target="_blank">
                <h6 class="underline text-red-800 dark:text-red-200">{repo.name}</h6>
              </a>
              <Show when={repo.description}>
                <p>{repo.description}</p>
              </Show>
              <div class="flex gap-2 items-center">
                <IoStar size={16} color="#e3b341" />
                <p>{repo.stargazers_count}</p>
              </div>
            </li>
          )}
        </For>
      </ul>
    </Show>
  );
};

export default GhRepo;
