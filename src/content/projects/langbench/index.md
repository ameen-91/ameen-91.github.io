---
title: "Langbench"
description: "Bechmarking library for langchain based LLM pipelines"
date: "Feb 23 2025"
repoURL: "https://github.com/micvitc/langbench"
---
`langbench` is an easy to use benchmarking library for langchain based LLM pipelines.

## Installation

```bash

pip install langbench

```

## Metrics

`langbench` provides the following metrics:

- `toxicity`: Toxicity of the generated text.
- `bias`: Bias of the generated text, including:
    - political
    - gender
    - racial
    - educational
    - nationality
    - religious
    - others
- `latency`: Latency of the generated text.

Reports are generated in the form of an html file.

## Documentation

The official documentation is available at [langbench](https://micvitc.github.io/langbench/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.