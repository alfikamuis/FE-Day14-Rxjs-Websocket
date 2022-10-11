import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should return equal value of 2 from listed array user',
    (done: DoneFn) => {
      service.getList().subscribe(value => {
        expect(value.length).toEqual(2);
        done();
      });
    });

  it('should return equal value of 3 when add one user',
    (done: DoneFn) => {
      var newUser = { id: 0, nama: 'test', kota: 'test' };
      service.getList().subscribe(value => {
        let editId = service.add(newUser, value);
        service.setUserData(editId);

        expect(value.length).toEqual(3);
        done();
      });
    });

    it('should return equal id and equal nama of the updated user',
    (done: DoneFn) => {
      //update data id 1
      var newUser = { id: 1, nama: 'test', kota: 'test' };
      service.getList().subscribe(value => {
        var editId = service.update(newUser, value);

        expect(editId[0].id).toEqual(1);
        expect(editId[0].nama).toEqual('test');
        done();
      });
    });

    it('should return empty array when deleted',
    (done: DoneFn) => {
      //delete data id 1
      var deleteUser = { id: 1, nama: '', kota: '' };
      service.getList().subscribe(value => {
        service.delete(deleteUser, value);
        
        expect(value.length).toEqual(1);
        expect(value.filter(item => item.id === 1)).toEqual([]);
        done();
      });
    });

});

