import java.util.Arrays;

class Sorting{
	public static void main(String[] args) {
		System.out.println("Merge Sort");
		int[] arr = new int[] {89,4,3,6,2,8,9,45};
		quickSort(arr, 0, arr.length-1);
		System.out.println(Arrays.toString(arr));
		// for(int i =0; i<arr.length; i++){
		// 	System.out.println(arr[i]);
		// }
	}

	// Bubble Sort
	static void bubbleSort(int[] arr) {

		for(int i =0; i<arr.length-1; i++){

			for(int j =i+1; j<arr.length; j++){
				if(arr[i] > arr[j]){
					int temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
			}

			}
		}
	}

	// Merge Sort
	static void mergeSort(int[] arr, int start, int end) {
		if(start < end){
				int mid = start +(end - start)/2;

				mergeSort(arr, 0, mid);
				mergeSort(arr, mid+1, end);
				mergeArr(arr, start, mid, end);
			}
	}

	static void mergeArr(int[] arr, int start, int mid, int end) {
		int[] temp = new int[end - start +1];
		int i = start, j= mid+1, k=0;
		while(i<=mid && j <=end){
			if(arr[i] <= arr[j]){
					temp[k] = arr[i];
					i++;

			}else{
					temp[k] = arr[j];
					j++;
			}
			k++;
		}
		while(i<=mid ){
			temp[k] = arr[i];
			i++;
			k++;
		}
		while(j<=end){
			temp[k] = arr[j];
			j++;
			k++;
		}

		for(int a =start; a <=end; a++){
			arr[a] = temp[a -start];
		}
	}
	// insertion Sort
	static void insertionSort(int[] arr) {


		for (int i=1;i <arr.length ;i++ ) {
			int sel= arr[i];
			int j = i-1;
			while(j>=0 && sel < arr[j]){
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] =temp;
				j--;
				i--;
			}

		}
	}

	// Quick Sort
	static void quickSort(int[] arr, int low, int high) {
		if(low < high){
			int pivot = partition(arr, low, high);
			quickSort(arr, low, pivot-1);
			quickSort(arr, pivot+1, high);
		}
	}
	static int partition(int[] arr, int low, int high){
		int pivot = arr[high];
		int i = low-1;
		for(int j = low; j<high; j++){
			if(arr[j] <= pivot){
				i++;
				int temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		i++;
		int temp = arr[i];
		arr[i] = arr[high];
		arr[high] = temp;
		return i;
	}

}
