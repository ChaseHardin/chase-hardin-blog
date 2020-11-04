---
title: "Configuring Virtual Environments with Pyenv"
date: "2019-11-26"
author: Chase Hardin
cover: https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_1280.png
published: false,
categories: ['Python']
---

Here we will be discussing the importance of creating virtual environments and how to setup Pyenv on a Mac computer.

First, let's install <i>pyenv</i> and <i>pyenv-virtualenv</i> and let's use <i>brew</i> to do this.

```bash
brew install pyenv
brew install pyenv-virtualenv
```

Once we have <i>pyenv</i> installed, it's time to install the version of Python we'd like to use. Do this by running

```bash
pyenv install <version>
```

Now it's time to create the virtual environment. Generally for the environment name, I like to add env_version to the end to signify it's a virtual environment and easy to know what Python version is being used. For example, my env name would be something like

```bash
pyenv virtualenv <version> <environment_name>
```

Next, we need to modify our .zshrc or .bash_profile so that we can work with pyenv and virtualenv. Add these lines to the bottom of the file

```bash
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

To initialize our virtual environment, we need to create a file called, .python-version. Within the file, add the virtual environment name. When you navigate to that directory within a terminal, it will auto activate. The other option is to manually activate like so

```bash
pyenv activate <virtual_environment_name>
```
