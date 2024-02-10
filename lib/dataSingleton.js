

module.exports = {
    entities:        [], //array of all entities
    iobID2entity:    {}, //find entities (array) by ioBroker-object id.
    entityId2Entity: {}, //find entity by entity_id.
    adapter:         {}, //adapter object
    server:          {}, //lovelace-web server object
    log:             {}, //log object
    lang:          'en', //configured language
    words:           {}, //translation via words.json
    entityIconUrls:  []
};
