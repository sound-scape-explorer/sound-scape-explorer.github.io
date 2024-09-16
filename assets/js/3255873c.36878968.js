"use strict";(self.webpackChunksound_scape_explorer_github_io=self.webpackChunksound_scape_explorer_github_io||[]).push([[3887],{61758:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(86070),i=r(25710),t=r(22672);const o={sidebar_position:3},a="\ud83e\uddee Processing setup",c={id:"developers/processing-setup/index",title:"\ud83e\uddee Processing setup",description:"Environment",source:"@site/versioned_docs/version-13.2.3/developers/processing-setup/index.mdx",sourceDirName:"developers/processing-setup",slug:"/developers/processing-setup/",permalink:"/docs/13.2.3/developers/processing-setup/",draft:!1,unlisted:!1,editUrl:"https://github.com/sound-scape-explorer/sound-scape-explorer.github.io/tree/main/versioned_docs/version-13.2.3/developers/processing-setup/index.mdx",tags:[],version:"13.2.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc1 Get codebase",permalink:"/docs/13.2.3/developers/get-codebase/"},next:{title:"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f Visualisation setup",permalink:"/docs/13.2.3/developers/visualisation-setup/"}},g={},l=[{value:"Environment",id:"environment",level:2},{value:"Basic user flows",id:"basic-user-flows",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Custom action examples",id:"custom-action-examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-processing-setup",children:"\ud83e\uddee Processing setup"})}),"\n",(0,s.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Navigate to source root directory\ncd sound-scape-explorer\n\n# Create virtual environment\npython3.10 -m venv venv\n\n# Activate environment\nsource venv/bin/activate\n\n# Install processing in dev mode\npip install -e processing\n\n# Edit and run code...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-user-flows",children:"Basic user flows"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["When user runs ",(0,s.jsx)(n.code,{children:"sse"})," command, it will trigger the ",(0,s.jsx)(n.code,{children:"processing.cli:start_processing"})," function"]}),"\n",(0,s.jsxs)(n.li,{children:["When user selects a menu choice, it will trigger one or more actions from ",(0,s.jsx)(n.code,{children:"processing.actions"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"file-structure",children:"File structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"sound-scape-explorer/processing/\n\u251c\u2500\u2500 processing/ --\x3e Package source\n\u2502   \u251c\u2500\u2500 actions/ --\x3e Menu choices\n\u2502   \u251c\u2500\u2500 common/\n\u2502   \u251c\u2500\u2500 config/\n\u2502   \u251c\u2500\u2500 digesters/\n\u2502   \u251c\u2500\u2500 errors/\n\u2502   \u251c\u2500\u2500 extractors/\n\u2502   \u251c\u2500\u2500 lib/ --\x3e Legacy code\n\u2502   \u251c\u2500\u2500 loaders/\n\u2502   \u251c\u2500\u2500 reducers/\n\u2502   \u251c\u2500\u2500 storage/\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 cli.py --\x3e User CLI entrypoints\n\u2502   \u2514\u2500\u2500 main.py --\x3e User menu\n\u2514\u2500\u2500 pyproject.toml --\x3e Package configuration\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Code completion and styling are provided by:"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.un,{})," Python type hints"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"https://pypi.org/project/isort/",children:"isort"})," (formatter)"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"https://pypi.org/project/black/",children:"black"})," (formatter)"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.a,{href:"https://pypi.org/project/flake8/",children:"flake8"})," (diagnostics)"]})]}),(0,s.jsx)(n.p,{children:"Configure your editor accordingly to improve your development experience."})]}),"\n",(0,s.jsx)(n.h2,{id:"custom-action-examples",children:"Custom action examples"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"refresh_configuration.py"})})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from processing.actions.refresh_configuration import refresh_configuration\nfrom processing.config.Config import Config\nfrom processing.storage.Storage import Storage\n\nconfig_path = "/path/to/config.xlsx"\nstorage_path = "/path/to/storage.h5"\n\nconfig = Config(config_path)\nstorage = Storage(storage_path)\n\nrefresh_configuration(config, storage)\n\n# Import other action or create custom...\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"display_menu_without_storage.py"})})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from processing.main import main\n\nstorage = None\nconfig_path = "/path/to/new_config.xlsx"\n\nmain(storage, config_path)\n\n# Interact with console...\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"load_config_and_print_files.py"})})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from processing.config.Config import Config\n\nconfig_path = "/path/to/config.xlsx"\nconfig = Config(config_path)\n\nfor file in config.files:\n    print(file) # FileConfig object\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"load_storage_and_print_files.py"})})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from processing.config.files.FileStorage import FileStorage\nfrom processing.config.settings.SettingsStorage import SettingsStorage\nfrom processing.storage.Storage import Storage\n\nstorage_path = "/path/to/storage.h5"\nstorage = Storage(storage_path)\n\nsettings = SettingsStorage.read_from_storage(storage)\nfiles = FileStorage.read_from_storage(storage, settings)\n\nfor file in files:\n    print(file) # FileConfig object\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.code,{children:"load_storage_extract_and_reduce.py"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import numpy as np\n\nfrom processing.common.TimelineWalker import TimelineWalker\nfrom processing.config.bands.BandConfig import BandConfig\nfrom processing.config.files.FileStorage import FileStorage\nfrom processing.config.integrations.IntegrationConfig import IntegrationConfig\nfrom processing.config.settings.SettingsStorage import SettingsStorage\nfrom processing.config.sites.SiteStorage import SiteStorage\nfrom processing.extractors.VggExtractor import VggExtractor\nfrom processing.reducers.UmapReducer import UmapReducer\nfrom processing.storage.Storage import Storage\nfrom processing.utils.create_timelines import create_timelines\n\n# INFO: This example could gain clarity by:\n# - Using consistent setters for objects\n# - Providing less arguments to `create_timelines()`\n# - Wrap timeline behavior behind simple API\n\n# Reading settings, files and sites from storage\nstorage_path = "/path/to/storage.h5"\nstorage = Storage(storage_path)\n\nsettings = SettingsStorage.read_from_storage(storage)\nfiles = FileStorage.read_from_storage(storage, settings)\nsites = SiteStorage.read_from_storage(storage, settings)\n\n# Creating custom band, integration and extractor\nband = BandConfig(0, "human", 20, 20000)\nintegration = IntegrationConfig(0, "15s", 15)\n\nvgg = VggExtractor()\nvgg.index = 0\nvgg.expected_sample_rate = 44100\n\n# Creating manual timelines (this section could be simplified greatly)\ntimelines = create_timelines(\n    sites=sites,\n    integrations=[integration],\n    settings=settings,\n    storage=storage,\n)\n\ntw = TimelineWalker()\ntw.storage = storage\ntw.bands = [band]\ntw.integrations = [integration]\ntw.timelines = timelines\ntw.extractors = [vgg]\n\n# Getting ready to walk the timeline and yield features\nfeatures = []\n\nfor (\n    features_seconds,\n    labels,\n    interval_details,  # arbitrary server unique slug for storage indexing\n    interval,  # Interval object\n    band,  # BandConfig object\n    extractor,  # ExtractorConfig object\n    timeline,  # current Timeline object\n) in tw.walk():\n    features_aggregated = list(np.mean(features_seconds, axis=0))\n    features.append(features_aggregated)\n\n# Creating custom reducer\nreducer = UmapReducer()\nreducer.load(3, None, features)\n\nfeatures_reduced = reducer.calculate()\n\n# Using reduced features...\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);