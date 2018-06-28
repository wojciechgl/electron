const {expect} = require('chai')

describe('process module', () => {
  describe('process.getCPUUsage()', () => {
    it('returns a cpu usage object', () => {
      const cpuUsage = process.getCPUUsage()
      expect(cpuUsage.percentCPUUsage).to.be.a('number')
      expect(cpuUsage.idleWakeupsPerSecond).to.be.a('number')
    })
  })

  describe('process.getIOCounters()', () => {
    before(function () {
      if (process.platform === 'darwin') {
        this.skip()
      }
    })

    it('returns an io counters object', () => {
      const ioCounters = process.getIOCounters()
      expect(ioCounters.readOperationCount).to.be.a('number')
      expect(ioCounters.writeOperationCount).to.be.a('number')
      expect(ioCounters.otherOperationCount).to.be.a('number')
      expect(ioCounters.readTransferCount).to.be.a('number')
      expect(ioCounters.writeTransferCount).to.be.a('number')
      expect(ioCounters.otherTransferCount).to.be.a('number')
    })
  })

  describe('process.getHeapStatistics()', () => {
    it('returns heap statistics object', () => {
      const heapStats = process.getHeapStatistics()
      expect(heapStats.totalHeapSize).to.be.a('number')
      expect(heapStats.totalHeapSizeExecutable).to.be.a('number')
      expect(heapStats.totalPhysicalSize).to.be.a('number')
      expect(heapStats.totalAvailableSize).to.be.a('number')
      expect(heapStats.usedHeapSize).to.be.a('number')
      expect(heapStats.heapSizeLimit).to.be.a('number')
      expect(heapStats.mallocedMemory).to.be.a('number')
      expect(heapStats.peakMallocedMemory).to.be.a('number')
      expect(heapStats.doesZapGarbage).to.be.a('boolean')
    })
  })
})
