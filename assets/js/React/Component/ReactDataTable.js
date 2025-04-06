(() => {
    //code for a new filters html element
    const Filters = (props) => {
        let updateAirportColor = (clickEvent) => {
            props.updateFormState({
                airportColor: clickEvent.target.value
            });
        }
        return (
            <React.Fragment>
                <p><b>Filter The Data Here:</b></p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Airport Color</b>
                        </div>
                        <div className='col-md-2'>
                            <select onChange={updateAirportColor}>
                                <option> </option>
                                <option>orange</option>
                                <option>green</option>
                                <option>blue</option>
                                <option>yellow</option>
                            </select>
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    const FruitFilters = (props) => {
        let updateStartingFruit = (clickEvent) => {
            props.updateFormState({
                startingFruit: clickEvent.target.value
            });
        }
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Starting Fruit</b>
                        </div>
                        <div className='col-md-2'>
                            <select onChange={updateStartingFruit}>
                                <option> </option>
                                <option>oranges</option>
                                <option>apples</option>
                                <option>peaches</option>
                                <option>cherries</option>
                                <option>pears</option>
                            </select>
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    const FemaleVillagerFilter = (props) => {
        let updateFemaleVillager = (clickEvent) => {
            props.updateFormState({
                femaleStartingVillager: clickEvent.target.value
            });
        }
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Female Villager</b>
                        </div>
                        <div className='col-md-2'>
                            <input
                                type="text"
                                placeholder="Enter villager name"
                                onChange={updateFemaleVillager}
                            />
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    const MaleVillagerFilter = (props) => {
        let updateMaleVillager = (clickEvent) => {
            props.updateFormState({
                maleStartingVillager: clickEvent.target.value
            });
        }
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-3'>
                            <b>Male Villager</b>
                        </div>
                        <div className='col-md-2'>
                            <input
                                type="text"
                                placeholder="Enter villager name"
                                onChange={updateMaleVillager}
                            />
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-2'></div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    //code for a new data table html element
    const DataTable = (props) => {
        return (<div className="table-responsive">
            <table id="myTable">
                <thead>
                    <tr>
                        <th>Reset</th>
                        <th>Airport Color</th>
                        <th>Starting Fruit</th>
                        <th>Female Starting Villager</th>
                        <th>Male Starting Villager</th>
                    </tr>
                    {props.dataToDisplay.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{row.reset}</td>
                                <td>{row.airportColor}</td>
                                <td>{row.startingFruit}</td>
                                <td>{row.femaleStartingVillager}</td>
                                <td>{row.maleStartingVillager}</td>
                            </tr>
                        );
                    })}
                </thead>
            </table>
        </div>
        )
    }
    class ReactDataTable extends React.Component {
        constructor(props) {
            // Call parent constructor method
            // props = short for properties
            super(props);

            this.state = {
                reset: null,
                airportColor: '',
                startingFruit: '',
                femaleStartingVillager: '',
                maleStartingVillager: ''
            }
            this.updateFormState = this.updateFormState.bind(this);
            this.originalData = props.originalData;
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            if (this.state.airportColor !== '') {
                filteredData = filteredData.filter(
                    (row) => row.airportColor === this.state.airportColor
                );
            }
            if (this.state.startingFruit !== '') {
                filteredData = filteredData.filter(
                    (row) => row.startingFruit === this.state.startingFruit
                );
            }
            if (this.state.femaleStartingVillager !== '') {
                filteredData = filteredData.filter(
                    (row) => row.femaleStartingVillager.toLowerCase().includes(this.state.femaleStartingVillager.toLowerCase())
                );
            }
            if (this.state.maleStartingVillager !== '') {
                filteredData = filteredData.filter(
                    (row) => row.maleStartingVillager.toLowerCase().includes(this.state.maleStartingVillager.toLowerCase())
                );
            }
            
            return (
                <React.Fragment>
                    <Filters
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <FruitFilters
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <FemaleVillagerFilter
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <MaleVillagerFilter
                        updateFormState={this.updateFormState}
                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />

                </React.Fragment>
            );
        }
    }

    const acData = [
        {
          "reset": 1,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "goose"
        },
        {
          "reset": 2,
          "airportColor": "blue",
          "startingFruit": "apples",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "scoot"
        },
        {
          "reset": 3,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "katt",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 4,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "shari",
          "maleStartingVillager": "lyman"
        },
        {
          "reset": 5,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "stinky"
        },
        {
          "reset": 6,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "sly"
        },
        {
          "reset": 7,
          "airportColor": "yellow",
          "startingFruit": "oranges",
          "femaleStartingVillager": "canberra",
          "maleStartingVillager": "sterling"
        },
        {
          "reset": 8,
          "airportColor": "orange",
          "startingFruit": "pears",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 9,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "goose"
        },
        {
          "reset": 10,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "scoot"
        },
        {
          "reset": 11,
          "airportColor": "blue",
          "startingFruit": "pears",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "kody"
        },
        {
          "reset": 12,
          "airportColor": "yellow",
          "startingFruit": "pears",
          "femaleStartingVillager": "quinn",
          "maleStartingVillager": "poncho"
        },
        {
          "reset": 13,
          "airportColor": "orange",
          "startingFruit": "pears",
          "femaleStartingVillager": "sylvia",
          "maleStartingVillager": "stinky"
        },
        {
          "reset": 14,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 15,
          "airportColor": "orange",
          "startingFruit": "pears",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "jitters"
        },
        {
          "reset": 16,
          "airportColor": "orange",
          "startingFruit": "cherries",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 17,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "reneigh",
          "maleStartingVillager": "peck"
        },
        {
          "reset": 18,
          "airportColor": "yellow",
          "startingFruit": "apples",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "buck"
        },
        {
          "reset": 19,
          "airportColor": "green",
          "startingFruit": "cherries",
          "femaleStartingVillager": "plucky",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 20,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "phoebe",
          "maleStartingVillager": "bam"
        },
        {
          "reset": 21,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "hazel",
          "maleStartingVillager": "roald"
        },
        {
          "reset": 22,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "rod"
        },
        {
          "reset": 23,
          "airportColor": "green",
          "startingFruit": "pears",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "dom"
        },
        {
          "reset": 24,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "phoebe",
          "maleStartingVillager": "rowan"
        },
        {
          "reset": 25,
          "airportColor": "orange",
          "startingFruit": "pears",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "sheldon"
        },
        {
          "reset": 26,
          "airportColor": "blue",
          "startingFruit": "pears",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "sheldon"
        },
        {
          "reset": 27,
          "airportColor": "orange",
          "startingFruit": "peaches",
          "femaleStartingVillager": "fuchsia",
          "maleStartingVillager": "scoot"
        },
        {
          "reset": 28,
          "airportColor": "blue",
          "startingFruit": "apples",
          "femaleStartingVillager": "deirdre",
          "maleStartingVillager": "drift"
        },
        {
          "reset": 29,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "paula",
          "maleStartingVillager": "leonardo"
        },
        {
          "reset": 30,
          "airportColor": "orange",
          "startingFruit": "cherries",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "mac"
        },
        {
          "reset": 31,
          "airportColor": "green",
          "startingFruit": "apples",
          "femaleStartingVillager": "plucky",
          "maleStartingVillager": "lyman"
        },
        {
          "reset": 32,
          "airportColor": "yellow",
          "startingFruit": "pears",
          "femaleStartingVillager": "paula",
          "maleStartingVillager": "goose"
        },
        {
          "reset": 33,
          "airportColor": "orange",
          "startingFruit": "peaches",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "dom"
        },
        {
          "reset": 34,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "cherry",
          "maleStartingVillager": "hamlet"
        },
        {
          "reset": 35,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "katt",
          "maleStartingVillager": "hamlet"
        },
        {
          "reset": 36,
          "airportColor": "green",
          "startingFruit": "pears",
          "femaleStartingVillager": "plucky",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 37,
          "airportColor": "yellow",
          "startingFruit": "oranges",
          "femaleStartingVillager": "ursala",
          "maleStartingVillager": "mac"
        },
        {
          "reset": 38,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "iggly"
        },
        {
          "reset": 39,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 40,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "sylvia",
          "maleStartingVillager": "teddy"
        },
        {
          "reset": 41,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "tammy",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 42,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "diva",
          "maleStartingVillager": "mott"
        },
        {
          "reset": 43,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "diva",
          "maleStartingVillager": "rod"
        },
        {
          "reset": 44,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "boone"
        },
        {
          "reset": 45,
          "airportColor": "yellow",
          "startingFruit": "pears",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 46,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "lyman"
        },
        {
          "reset": 47,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "ace"
        },
        {
          "reset": 48,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "frita",
          "maleStartingVillager": "bam"
        },
        {
          "reset": 49,
          "airportColor": "green",
          "startingFruit": "cherries",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "bam"
        },
        {
          "reset": 50,
          "airportColor": "green",
          "startingFruit": "apples",
          "femaleStartingVillager": "faith",
          "maleStartingVillager": "hamlet"
        },
        {
          "reset": 51,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "diva",
          "maleStartingVillager": "biff"
        },
        {
          "reset": 52,
          "airportColor": "green",
          "startingFruit": "pears",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "axel"
        },
        {
          "reset": 53,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "katt",
          "maleStartingVillager": "snake"
        },
        {
          "reset": 54,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "muffy",
          "maleStartingVillager": "rowan"
        },
        {
          "reset": 55,
          "airportColor": "blue",
          "startingFruit": "apples",
          "femaleStartingVillager": "hazel",
          "maleStartingVillager": "bam"
        },
        {
          "reset": 56,
          "airportColor": "blue",
          "startingFruit": "oranges",
          "femaleStartingVillager": "phoebe",
          "maleStartingVillager": "tank"
        },
        {
          "reset": 57,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "shari",
          "maleStartingVillager": "cobb"
        },
        {
          "reset": 58,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "reneigh",
          "maleStartingVillager": "bill"
        },
        {
          "reset": 59,
          "airportColor": "yellow",
          "startingFruit": "pears",
          "femaleStartingVillager": "reneigh",
          "maleStartingVillager": "goose"
        },
        {
          "reset": 60,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "sylvia",
          "maleStartingVillager": "lyman"
        },
        {
          "reset": 61,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "sylvia",
          "maleStartingVillager": "sly"
        },
        {
          "reset": 62,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "boone"
        },
        {
          "reset": 63,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "sterling"
        },
        {
          "reset": 64,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "phoebe",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 65,
          "airportColor": "orange",
          "startingFruit": "cherries",
          "femaleStartingVillager": "katt",
          "maleStartingVillager": "sprocket"
        },
        {
          "reset": 66,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 67,
          "airportColor": "blue",
          "startingFruit": "oranges",
          "femaleStartingVillager": "faith",
          "maleStartingVillager": "dom"
        },
        {
          "reset": 68,
          "airportColor": "green",
          "startingFruit": "apples",
          "femaleStartingVillager": "hazel",
          "maleStartingVillager": "iggly"
        },
        {
          "reset": 69,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "renee",
          "maleStartingVillager": "mac"
        },
        {
          "reset": 70,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "tank"
        },
        {
          "reset": 71,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "faith",
          "maleStartingVillager": "jay"
        },
        {
          "reset": 72,
          "airportColor": "blue",
          "startingFruit": "pears",
          "femaleStartingVillager": "ursala",
          "maleStartingVillager": "hamlet"
        },
        {
          "reset": 73,
          "airportColor": "green",
          "startingFruit": "pears",
          "femaleStartingVillager": "cherry",
          "maleStartingVillager": "roald"
        },
        {
          "reset": 74,
          "airportColor": "orange",
          "startingFruit": "peaches",
          "femaleStartingVillager": "katt",
          "maleStartingVillager": "axel"
        },
        {
          "reset": 75,
          "airportColor": "yellow",
          "startingFruit": "oranges",
          "femaleStartingVillager": "hazel",
          "maleStartingVillager": "tiansheng"
        },
        {
          "reset": 76,
          "airportColor": "orange",
          "startingFruit": "peaches",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "mott"
        },
        {
          "reset": 77,
          "airportColor": "orange",
          "startingFruit": "cherries",
          "femaleStartingVillager": "shari",
          "maleStartingVillager": "frobert"
        },
        {
          "reset": 78,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "tammy",
          "maleStartingVillager": "samson"
        },
        {
          "reset": 79,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "charlise",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 80,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "cherry",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 81,
          "airportColor": "green",
          "startingFruit": "peaches",
          "femaleStartingVillager": "ursala",
          "maleStartingVillager": "billy"
        },
        {
          "reset": 82,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 83,
          "airportColor": "yellow",
          "startingFruit": "pears",
          "femaleStartingVillager": "quinn",
          "maleStartingVillager": "snake"
        },
        {
          "reset": 84,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "cherry",
          "maleStartingVillager": "buck"
        },
        {
          "reset": 85,
          "airportColor": "orange",
          "startingFruit": "pears",
          "femaleStartingVillager": "deirdre",
          "maleStartingVillager": "sly"
        },
        {
          "reset": 86,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "pashmina",
          "maleStartingVillager": "bud"
        },
        {
          "reset": 87,
          "airportColor": "orange",
          "startingFruit": "apples",
          "femaleStartingVillager": "shari",
          "maleStartingVillager": "boots"
        },
        {
          "reset": 88,
          "airportColor": "orange",
          "startingFruit": "oranges",
          "femaleStartingVillager": "charlise",
          "maleStartingVillager": "ribbot"
        },
        {
          "reset": 89,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "mac"
        },
        {
          "reset": 90,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "quinn",
          "maleStartingVillager": "bud"
        },
        {
          "reset": 91,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "mira",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 92,
          "airportColor": "orange",
          "startingFruit": "cherries",
          "femaleStartingVillager": "hazel",
          "maleStartingVillager": "sprocket"
        },
        {
          "reset": 93,
          "airportColor": "blue",
          "startingFruit": "peaches",
          "femaleStartingVillager": "diva",
          "maleStartingVillager": "lyman"
        },
        {
          "reset": 94,
          "airportColor": "yellow",
          "startingFruit": "apples",
          "femaleStartingVillager": "agnes",
          "maleStartingVillager": "sheldon"
        },
        {
          "reset": 95,
          "airportColor": "blue",
          "startingFruit": "cherries",
          "femaleStartingVillager": "shari",
          "maleStartingVillager": "coach"
        },
        {
          "reset": 96,
          "airportColor": "green",
          "startingFruit": "cherries",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "sterling"
        },
        {
          "reset": 97,
          "airportColor": "yellow",
          "startingFruit": "peaches",
          "femaleStartingVillager": "rocket",
          "maleStartingVillager": "antonio"
        },
        {
          "reset": 98,
          "airportColor": "yellow",
          "startingFruit": "oranges",
          "femaleStartingVillager": "reneigh",
          "maleStartingVillager": "goose"
        },
        {
          "reset": 99,
          "airportColor": "yellow",
          "startingFruit": "cherries",
          "femaleStartingVillager": "flo",
          "maleStartingVillager": "pierce"
        },
        {
          "reset": 100,
          "airportColor": "green",
          "startingFruit": "oranges",
          "femaleStartingVillager": "phoebe",
          "maleStartingVillager": "flip"
        }
       ];

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={acData} />);

})();