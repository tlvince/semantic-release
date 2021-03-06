'use strict'

var test = require('tape')

var createModule = require('./lib/create-module')

require('./scenarios/install')(test, createModule)
require('./scenarios/prepublish')(test, createModule)
require('./scenarios/postpublish')(test, createModule)
require('./scenarios/publish')(test, createModule)
require('./scenarios/verify')(test, createModule)
require('./scenarios/setup')(test, createModule)
