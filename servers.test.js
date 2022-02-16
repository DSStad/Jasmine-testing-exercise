describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    
    let curTDList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTDList.length).toEqual(3);
    expect(curTDList[0].innerText).toEqual('Alice');
    expect(curTDList[1].innerText).toEqual('$0.00');
    expect(curTDList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    serverID = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
