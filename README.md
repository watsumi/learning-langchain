# Learning LangChain Code Examples

This repository contains code examples (in python and javascript) from each chapter of the book "Learning LangChain".

To run the examples, you can clone the repository and run the examples in your preferred language.

**For python examples:**

If you haven't installed python on your system, install it first as per the instructions [here](https://www.python.org/downloads/).

1. Create a virtual environment:

This command creates a directory named `.venv` containing the virtual environment.

```bash
python -m venv .venv
```

2. Activate the virtual environment:

- MacOs/Linux:

```bash
source .venv/bin/activate
```

- Windows:

```bash
.venv\Scripts\activate
```

After activation, your terminal prompt should prefix with (venv), indicating that the virtual environment is active.

3. Install the dependencies in the `pyproject.toml` file:

```bash
pip install -e .
```

4. Verify the installation:

```bash
pip list
```

5. Run an example to see the output:

```bash
python ch2/py/a-text-loader.py
```

**For javascript examples:**

If you haven't installed node on your system, install it first as per the instructions [here](https://nodejs.org/en/download/).

1. Install the dependencies in the `package.json` file:

```bash
npm install
```

2. Run the example to see the output:

```bash
node ch2/js/a-text-loader.js
```
