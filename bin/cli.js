#!/usr/bin/env node
import minimist from 'minimist';
import { roll } from '../lib/roll.js'

const args = minimist(process.argv.slice(2))

var numSides = args.sides
var numDice = args.dice
var numRolls = args.rolls

console.log(JSON.stringify(roll(numSides, numDice, numRolls)))