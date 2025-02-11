import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwAll(): Promise<void> {
  try {
    const throwOnceMSG = await read('foo', true);
    console.log(elapsed(), 'throwOnce:', throwOnceMSG);

    const throwSeveralMSG1 = await read('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', throwSeveralMSG1);
    const throwSeveralMSG2 = await read('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', throwSeveralMSG2);
    const throwSeveralMSG3 = await read('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', throwSeveralMSG3);

    const throwChainedMSG1 = await read('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', throwChainedMSG1);
    const throwChainedMSG2 = await read(throwChainedMSG1, true);
    console.log(elapsed(), 'throwChained2:', throwChainedMSG2);
    const throwChainedMSG3 = await read(throwChainedMSG2, true);
    console.log(elapsed(), 'throwChained3:', throwChainedMSG3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

async function throwBest(): Promise<void> {
  await throwAll();
}

throwBest();
